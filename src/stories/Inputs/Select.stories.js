import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default {
  title: "Inputs/Select",
};

export const SelectMenu = () => {
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <div>
      <FormControl>
        <InputLabel variant="filled" id="select-label">Select Item</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={item}
          onChange={handleChange}
          style={{minWidth: "300px"}}
          variant="filled"
        >
          <MenuItem value="foo">foo</MenuItem>
          <MenuItem value="bar">bar</MenuItem>
          <MenuItem value="flur">flur</MenuItem>
          <MenuItem value="ee">ee</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
