import React, { Component, PropTypes } from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps"
import Loader from 'components/dashboard/common/Loader'

export default class OrganizationItem extends Component {
  render() {
    const {
      detail,
      toggleEdit
    } = this.props

    return (
        <dl>
          {detail.contactInfo != null &&
            <div>
              <dt>Organization Contact</dt>
              <dd>
                {detail.contactInfo.firstName && <span>{detail.contactInfo.firstName} <br /></span>}
                {detail.contactInfo.lastName && <span>{detail.contactInfo.lastName} <br /></span>}
                {detail.contactInfo.email && <span>{detail.contactInfo.email} <br /></span>}
                {detail.contactInfo.phone && <span>{detail.contactInfo.phone} <br /></span>}
                {detail.contactInfo.other && <span>{detail.contactInfo.other} <br /></span>}
              </dd>

              <button type="submit" className="btn btn--alpha" style={{ width: '100%' }} onClick={toggleEdit}>Edit Contact</button>
            </div>
          }

          {detail.name &&
            <div>
              <dt>Organization name</dt>
              <dd>{detail.name || '-'}</dd>
            </div>
          }


          <div className="google-map__wrapper">
            <GoogleMapLoader
              containerElement={
                <div
                  style={{
                    height: "150px",
                  }}
                />
              }
              googleMapElement={
                <GoogleMap
                  ref={(map) => console.log(map)}
                  defaultZoom={14}
                  defaultCenter={{ lat: detail.latitude, lng: detail.longitude }}
                  onClick={() => {}}
                >
                  <Marker
                    position={{ lat: detail.latitude, lng: detail.longitude }}
                    key={detail.id}
                  />
                </GoogleMap>
              }
            />
          </div>
          {detail.address && (
            detail.address.region ||
            detail.address.country ||
            detail.address.region ||
            detail.address.zip ||
            detail.address.city
          ) &&
            <div>
              <dt>Address</dt>
              <dd>
                {detail.address.region || '-'}<br />
                {detail.address.country || '-'}<br />
                {detail.address.region || '-'}<br />
                {detail.address.zip || '-'}, {detail.address.city || '-'}
              </dd>
            </div>
          }

          {detail.categories && detail.categories.labels && detail.categories.labels.length > 0 &&
            <div>
              <dt>Categories</dt>
              <dd>
                {detail.categories && detail.categories.labels && detail.categories.labels.map(item => <div key={item} >{item}</div> )}
              </dd>
            </div>
          }

          {detail.departments && detail.departments.length > 0 &&
            <div>
              <dt>Departments</dt>
              <dd>
                {detail.departments && detail.departments.map(item => <div key={item.id} >{item.name}</div> )}
              </dd>
            </div>
          }

          {detail.openingHours && detail.openingHours.length > 0 &&
            <div>
              <dt>Opening hours</dt>
              <dd>
                {detail.openingHours && detail.openingHours.map(item => <div key={item.id} ><strong>{item.dayOfWeek}:</strong> {item.open} - {item.close}</div> )}
              </dd>
            </div>
          }

          {detail.phone &&
            <div>
              <dt>Phone</dt>
              <dd>
                {detail.phone}
              </dd>
            </div>
          }

          {detail.email &&
            <div>
              <dt>E-mail</dt>
              <dd>
                {detail.email}
              </dd>
            </div>
          }

          {detail.website &&
            <div>
              <dt>Website</dt>
              <dd>
                {detail.website}
              </dd>
            </div>
          }

        </dl>
    )
  }
}
