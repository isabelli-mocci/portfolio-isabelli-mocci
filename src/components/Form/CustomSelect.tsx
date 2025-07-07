import { memo, useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import type { SelectOption } from '../../types/contactForm.types';
import contactSectionStyles from '../../styles/contactSection.styles';

interface CustomSelectProps {
  readonly id: string;
  readonly name: string;
  readonly value: string;
  readonly onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  readonly placeholder: string;
  readonly options: ReadonlyArray<SelectOption>;
  readonly required?: boolean;
  readonly hasError?: boolean;
}

export const CustomSelect = memo<CustomSelectProps>(({
  id,
  name,
  value,
  onChange,
  placeholder,
  options,
  required = false,
  hasError = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (optionValue: string) => {
    const syntheticEvent = {
      target: { name, value: optionValue }
    } as React.ChangeEvent<HTMLSelectElement>;
    onChange(syntheticEvent);
    setIsOpen(false);
  };

  const selectedOption = options.find(option => option.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  return (
    <div ref={selectRef} className="relative">
      <div
        className={`${hasError ? contactSectionStyles.formSelectError : contactSectionStyles.formSelect} cursor-pointer flex items-center justify-between`}
        onClick={() => setIsOpen(!isOpen)}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          } else if (e.key === 'Escape') {
            setIsOpen(false);
          }
        }}
      >
        <span className={value ? 'text-white' : 'text-white/50'}>
          {displayText}
        </span>
        <FaChevronDown 
          className={`w-4 h-4 text-white/50 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
      >
        <option value="">{placeholder}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {isOpen && (
        <div 
          className={contactSectionStyles.customSelectDropdown}
          role="listbox"
          aria-label={placeholder}
        >
          {options.map(option => (
            <div
              key={option.value}
              className={
                option.value === value 
                  ? contactSectionStyles.customSelectOptionSelected 
                  : contactSectionStyles.customSelectOption
              }
              onClick={() => handleOptionClick(option.value)}
              role="option"
              aria-selected={option.value === value}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOptionClick(option.value);
                }
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

CustomSelect.displayName = 'CustomSelect';
