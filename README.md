## MessageUs Business Web

### Setting up dev environment
Install NVM (https://github.com/creationix/nvm#installation)
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

Or use `Homebrew` to install on Mac OSX
```bash
brew install nvm
```

**Note:** *Make sure following lines exist in one of these files based on your OS (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc)*
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```

### Install dependencies
- Install and use Node version 5.1.0
```bash
nvm install 5.1.0
nvm use
```
- Install node packages. **Note:** *`package.json` is setup such that `npm run build` will after install. 'build' uses `webpack` to build assets for dynamic parts of the website (i.e. widgets etc.)*
```bash
npm install
```
### Start Server
```bash
npm run dev-server
```

### Entry point for server
```bash
http://localhost:3000/
```

### Entry point for server (with autoreload, ending slash necessary)
```bash
http://localhost:3000/webpack-dev-server/
```