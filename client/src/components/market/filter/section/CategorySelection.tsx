import React, { Fragment } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";

interface ICategorySelection {
  handleSelections: Function;
  checked: string[];
}

const CategorySelection = ({
  handleSelections,
  checked,
}: ICategorySelection) => {
  const categories = [
    { name: "VEGETABLE" },
    { name: "FRUIT" },
    { name: "MEAT" },
  ];
  //const [checked, setChecked] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    //setChecked(newChecked);
    handleSelections(newChecked);
  };

  const renderCheckBoxs = () =>
    categories &&
    categories.map((category, index) => (
      <Fragment key={index}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.indexOf(category.name) === -1 ? false : true}
              onChange={() => handleToggle(category.name)}
              name={category.name}
              color="primary"
            />
          }
          label={
            category.name.substring(0, 1) +
            category.name.substring(1, category.name.length).toLowerCase()
          }
        />
      </Fragment>
    ));

  return (
    <div>
      <h1 className="text-base mb-2">Category</h1>
      <FormGroup row>{renderCheckBoxs()}</FormGroup>
    </div>
  );
};

export default CategorySelection;
