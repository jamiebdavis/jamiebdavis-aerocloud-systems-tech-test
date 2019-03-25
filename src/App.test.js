import App from "./App";
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Toolbar from "./components/Toolbar/Toolbar";
import Button from "./components/Button/Button";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("Containers <Toolbar /> component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Toolbar)).toHaveLength(1);
  });
});

describe("<Toolbar />", () => {
  it("Containers <Button /> component", () => {
    const wrapper = shallow(<Toolbar />);

    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
