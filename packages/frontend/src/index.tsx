/**
 * Copyright (c) 2021 - REPLACE_ME, Inc
 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const HelloWorld: React.FC<{}> = () => {
    return <div>Hello world!</div>;
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
