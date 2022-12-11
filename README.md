# Sample-repo

This is a lerna managed typescript monorepo. It has an express backend, a React frontend, and a shared API package to maintain the boundary between the two.

The frontend layer is managed mostly through create-react-app, but injects a custom webpack loader plugin (scss-modules) to add typings to module.scss files.

In addition the api package has a set of generic types that allow for typesafety on the backend and frontend by declaring the interfaces in a shared API package.
