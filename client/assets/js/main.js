$(function () {
  // Safari, in Private Browsing Mode, looks like it supports localStorage but all calls to setItem
  // throw QuotaExceededError. We're going to detect this and just silently drop any calls to setItem
  // to avoid the entire page breaking, without having to do a check at each usage of Storage.
  if (typeof sessionStorage === 'object') {
      try {
          sessionStorage.setItem('sessionStorage', 1);
          sessionStorage.removeItem('sessionStorage');
      } catch (e) {
          Storage.prototype._setItem = Storage.prototype.setItem;
          Storage.prototype.setItem = function() {};
          console.info('Your browser\'s Storage function were not initialized correctly. This usually happens in Safari while browsing in private mode. For a better experience and faster website load, please visit the page in normal mode.')
      }
  }
  function storeItem(item, value) {
    try { // encapsulate setItem for storages to fix ios incognito bug
      sessionStorage.setItem(item, value)
    } catch(e) {}
  }
  if (window.location.hash === '#!geo-override') {storeItem('ip-allowed', '1');ss.className = ''}

  if ($('html').hasClass('loading')) {
    // Unblocking blocked content
    var countryCode = 'us'
    $.getJSON('https://ipinfo.io/?token=dfd49053b9ae97', function (data) {
      countryCode = data.country.toLowerCase()
      window.countryCode = countryCode
      if (data.country) {
        $('html').removeClass('outside-us').removeClass('loading')
        if ( typeof (Storage) !== 'undefined' ) {
          storeItem('ip-allowed', '1')
          storeItem('countryCode', countryCode)
        }
        $(window).trigger('resize')
        mixpanel.track('Visitor from ' + data.city + ', ' + data.region + ', ' + data.country)
      } else {
        $('html').removeClass('loading').addClass('outside-us')
        mixpanel.track('Visitor from unknown region.')
        typeof (Storage) !== 'undefined' && storeItem('ip-allowed', '0')
      }
      $('input.international-phone-number').intlTelInput('destroy').intlTelInput({initialCountry: countryCode})
    })
  }

  $('input.international-phone-number').intlTelInput({initialCountry: countryCode})


  $('.modal_close').click(function (event) {event.preventDefault()})

  var $window = $(window)

  $(document).on('click touchstart', '.toggle-nav', function (event) {
    event.stopPropagation()
    event.preventDefault()
    if (event.handled !== true) {
      $(this).toggleClass('active')
      $('nav[role="navigation"]').toggleClass('active')
      $('.header .website-brand-logo').toggleClass('menu-active')
    } else {
      return false
    }
  })

  $('nav li').has('.sub-menu__nav').find('a.active').addClass('expanded')

  $(document).on('click', '.scroll-hint, [href="#scroll-down"]', function (e) {
    e.preventDefault()
    if (/Mobi/.test(navigator.userAgent) || window.matchMedia('only screen and (max-width: 767px)').matches) {
      $('html,body').animate({
        scrollTop: $('header+.section').offset().top
      }, 350)
    } else {
      $('html,body').animate({
        scrollTop: $('header+.section').offset().top - 105
      }, 350)
    }
  }) 

  $webMenu = $('header .header')
  function fixHeader () {
    var amount = $window.scrollTop()
    if (amount > 300) {
      $webMenu.addClass('fixed')
    } else {
      $webMenu.removeClass('fixed')
    }
  }
  if ($webMenu.length) {
    $window.scroll(fixHeader)
  }
  fixHeader()

  $(document).on('keyup change', 'input', function (event) {
    if ($(this).val().length) {
      $(this).parent().find('.label').addClass('visible')
    }
  })
  $(document).on('keyup change', 'input[type="tel"]', function() {
    if ($(this).val().length) {
      $(this).parents('.intl-tel-input').next().addClass('visible')
    }
  })

  // SVG graph
  function drawSvgLines () {
    var $graphBack = $('.graph-channels--background')
    if ($graphBack.length) {
      var style = 'stroke:#C3C1C4;stroke-width:2;',
        graphChildren = $('.graph-channels__element'),
        $parent = $('.graph-channels'),
        parentLeft = $parent.offset().left,
        parentTop = $parent.offset().top,
        $main = $('.graph-channels__main'),
        mainCenterX = $main.offset().left + $main.width() / 2 - parentLeft,
        mainCenterY = $main.offset().top + $main.height() / 2 - parentTop

      $graphBack.attr({
        'width': ($parent.width()),
        'height': ($parent.height())
      })

      for (i = 0; i < graphChildren.length; i++) {
        x1 = graphChildren.eq(i).offset().left - parentLeft + (graphChildren.eq(i).width() / 2)
        y1 = graphChildren.eq(i).offset().top - parentTop + (graphChildren.eq(i).find('object').height() / 2 - 20)
        x2 = mainCenterX
        y2 = mainCenterY
        $graphBack.find('line').eq(i).attr({
          'x1': x1,
          'y1': y1,
          'x2': x2,
          'y2': y2,
          'style': style
        })
      }
    }
  }
  drawSvgLines()
  $window.on('resize', drawSvgLines)

  // claim your business modal
  $('a.modal-claim-business').leanModal({ top: 0, overlay: 0.8, closeButton: '.modal_close' })

  $('document').click('a[href="#"]', function(event) {
    event.preventDefault();
  })

  /*
   *  BRANCH SMS FORM
   */
  function sendSMS (phoneNumber) {
    var phone = phoneNumber
    var linkData = {
      tags: [],
      channel: 'Website',
      feature: 'TextMeTheApp',
      data: {}
    }
    var options = {}
    var callback = function (err, result) {
      if (err) {
        console.log(err)
      }
    }
    branch.sendSMS(phone, linkData, options, callback)
  }
  var feedbackTimeout = null
  function phoneInputFeedback (self, error, enable) {
    if (feedbackTimeout) {
      clearTimeout(feedbackTimeout)
      feedbackTimeout = null
    }
    var error = typeof error === 'undefined' ? false : error,
      enable = typeof enable === 'undefined' ? true : enable
    var containerForm = $(self).parents('form'),
      inputNode = containerForm.find('input.international-phone-number'),
      phoneNumber = inputNode.intlTelInput('getNumber')
    if (enable && !error) {
      containerForm.find('span.BranchNumber').text(phoneNumber)
      containerForm.removeClass('error').addClass('success')
      containerForm.find('.branch-sms-form__submit').addClass('force-hidden')
    } else {
      containerForm.removeClass('error').removeClass('success')
      containerForm.find('.branch-sms-form__submit').removeClass('force-hidden')
    }
    if (enable && error) {
      containerForm.removeClass('success').addClass('error')
    }
    if (enable) {
      feedbackTimeout = setTimeout(function () {phoneInputFeedback(self, false, false)}, 4000)
    }
  }
  function branchSend (event) {
    event.preventDefault()
    var containerForm = $(this).parents('.branch-sms-form'),
      inputNode = containerForm.find('input.international-phone-number'),
      phoneNumber = inputNode.intlTelInput('getNumber')
    if (inputNode.intlTelInput('isValidNumber') === true) {
      sendSMS(phoneNumber)
      phoneInputFeedback(this)
    } else {
      phoneInputFeedback(this, true)
    }
  }
  $('.international-phone-number').on('change keyup', function () {
    var submit = $(this).parents('form').find('.branch-sms-form__submit')[0]
    this.value.length > 3 ? submit.disabled = false : submit.disabled = 'true'
  })
  $('.branch-sms-form').on('submit', branchSend)
  $('.branch-sms-form .branch-sms-form__submit').on('click', branchSend)

  // If we detect a mobile device, redirect links manually
  if (/Mobi/.test(navigator.userAgent) || window.matchMedia('only screen and (max-width: 767px)').matches) {
    var unhandledLinks = document.querySelectorAll('a[data-mobile-href]')

    for (var i = 0; i < unhandledLinks.length; i++) {
      unhandledLinks[i].addEventListener('click', function (event) {
        event.preventDefault()
        window.open(this.getAttribute('data-mobile-href'))
      })
    }
  } else {
    $('a.modal-get-app').leanModal({ top: 0, overlay: 0.8, closeButton: '.modal_close' })
  }

  // Submit phone number for users outside of region
  $('form.outside-of-us').on('submit', function (event) {
    var inputNode = $(this).find('input.international-phone-number'),
      phoneNumber = inputNode.intlTelInput('getNumber'),
      numberValid = inputNode.intlTelInput('isValidNumber')

    event.preventDefault()
    var self = $(this).find('input.international-phone-number')[0]
    if (numberValid) {
      mixpanel.identify(phoneNumber)
      mixpanel.people.set({'phoneNumber': phoneNumber})
      phoneInputFeedback(self)
    } else {
      phoneInputFeedback(self, true)
    }
  })

  if ( window.location.search.indexOf("_branch_match_id") >- 1 ) {
    $('a.modal-claim-business').trigger('click')
  }
})
