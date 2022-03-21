# Props

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Getting Started

Using your command line, you will need to navigate to the this folder, install all dependencies, and start the app.

```bash
cd exercises/03-props/
code . # if you would like to open this in a separate VSCode window
npm install
npm start
```

To stop the application, press `ctrl+c`.

To run the tests:

```shell
npm run test
```

If you do not see any test results, press `a` to run all tests. The tests will rerun whenever you make a change.

To stop the tests, press `ctrl+c`.

## Instructions for Challenge

As a developer, I would like to create a component that welcomes users.
The component should accept a prop "name", which accepts a string.
If "name" is provided, the component should render "Hello, **\_\_\_\_\_**."
If "name" is not provided to the component, the component should render "Hello, user."
To achieve this, please use default props.

### Developer Instructions

1.  Create a folder name components inside of the _exercises/03-props/src_ folder
2.  Create a "Welcome" component
3.  The "Welcome" component should import react
4.  The "Welcome" component should render the proper text to the screen using the h1 tags

```bash
<Welcome name="Jamal" />
<Welcome name="Jamal" />
<Welcome />
```

### Example

![](demo.png)
