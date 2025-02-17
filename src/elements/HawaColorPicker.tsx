import React, { useState } from "react"

type ColorPickerTypes = {
  color?: any
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const HawaColorPicker: React.FunctionComponent<ColorPickerTypes> = (
  props
) => {
  const [selectedColor, setSelectedColor] = useState(props.color)
  return (
    <div className={`flex w-fit flex-row rounded border-2 border-gray-200 p-0`}>
      <div
        style={{ backgroundColor: selectedColor }}
        className="rounded-tl-lg rounded-bl-lg"
      >
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => {
            setSelectedColor(e.target.value)
            props.handleChange(e)
          }}
          className="opacity-0"
        />
      </div>

      <input
        type="text"
        value={selectedColor}
        className="w-24  rounded-tr-lg rounded-br-lg pr-2 pl-2"
      />
    </div>
  )
}
