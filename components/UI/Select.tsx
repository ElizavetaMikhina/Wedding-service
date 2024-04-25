import React, { useState } from 'react';

interface Option {
    label: string;
    value: string;
}

type SelectCallback = (selectedOption: Option) => void;

interface SelectProps {
    options: Option[];
    onSelect: SelectCallback;
    title?: string;
}

const Select: React.FC<SelectProps> = ({ options, onSelect, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleSelectClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    return (
        <div className="select-container">
            {title && <h3 className="select__title">{title}</h3>}
            <div 
                className={`select__selected ${isOpen ? 'active' : ''}`} 
                onClick={handleSelectClick}
            >
                {selectedOption.label}
            </div>
            <div className={`select__items ${isOpen ? 'open' : ''}`}>
                {options.map(option => (
                    <div
                        key={option.value}
                        className={`select__item ${option.value === selectedOption.value ? 'selected' : ''}`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Select;



// const Select: React.FC<SelectProps> = ({ options, onSelect, title }) => {
//     const [selectedOption, setSelectedOption] = useState(options[0]);

//     const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         const selectedValue = event.target.value;
//         const selectedOption = options.find(option => option.value === selectedValue);
//         if (selectedOption) {
//             setSelectedOption(selectedOption);
//             onSelect(selectedOption);
//         }
//     };

//     return (
//         <div className="select-container">
//             {title && <h3>{title}</h3>}
//             <select value={selectedOption.value} onChange={handleSelectChange}>
//                 {options.map(option => (
//                     <option key={option.value} value={option.value}>{option.label}</option>
//                 ))}
//             </select>
//         </div>
//     );
// };