"use client";

import { useState } from "react";
import { Button, Input, DateRangePicker } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";

interface Field {
  fieldName: string;
  displayName: string;
  objectType: string;
  placeholder: string;
}

const SearchPanel: React.FC<{ fields: Field[] }> = ({ fields }) => {
  const [searchValues, setSearchValues] = useState<{ [key: string]: string }>(
    {},
  );

  const handleChange = (fieldName: string, value: string) => {
    setSearchValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  return (
    <div>
      <div className="flex  flex-wrap  mb-6 gap-4 md:pt-4">
        {fields.map(({ fieldName, displayName, objectType, placeholder }) => (
          <div key={fieldName}>
            {objectType === "text" && (
              <Input
                id={fieldName}
                label={displayName}
                name={fieldName}
                placeholder={placeholder}
                type="text"
                value={searchValues[fieldName] || ""}
                onChange={(e) => handleChange(fieldName, e.target.value)}
              />
            )}
            {/* {objectType === 'select' &&
                        <Select
                            label={displayName}
                            id={fieldName}
                            name={fieldName}
                            placeholder={placeholder}
                            value={searchValues[fieldName] || ''}
                            onChange={(value) => handleChange(fieldName, fieldName)}
                        >
                        </Select>}  */}
            {objectType === "date" && (
              <DateRangePicker
                className="max-w-xs"
                defaultValue={{
                  start: parseDate("2024-04-01"),
                  end: parseDate("2024-04-08"),
                }}
                label={displayName}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Button color="primary">Submit</Button>
      </div>
    </div>
  );
};

export default SearchPanel;
