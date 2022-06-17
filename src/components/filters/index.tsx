import { useState } from 'react'
import Flex from '../flex'
import Icon from '../icon'
import { StyledWrapper, StyledButton, StyledFlyout, StyledCheckbox, StyledLabel } from './styled'

export type Option = {
  value: string
  label: string
  checked: boolean
}

interface FiltersI {
  options: Option[]
  onChange: (options: Option[]) => void
}

const Filters = ({ options, onChange }: FiltersI) => {
  const [isOpen, setIsOpen] = useState(false)
  const count = options.filter(({ checked }) => checked).length

  return (
    <Flex spacer="xl" justify="flex-end">
      <StyledWrapper>
        <StyledButton onClick={() => setIsOpen(!isOpen)}>Filters {!!count && `(${count})`}</StyledButton>
        {isOpen && (
          <StyledFlyout>
            {options.map(({ value, label, checked }) => (
              <StyledLabel key={value}>
                <StyledCheckbox
                  type="checkbox"
                  checked={checked}
                  onChange={() => {
                    const newOptions = options.map((option) => {
                      if (option.value === value) {
                        return {
                          ...option,
                          checked: !checked,
                        }
                      }
                      return option
                    })

                    onChange(newOptions)
                  }}
                />
                {label}
                {value === 'favourites' && <Icon name="heart" fill="red" />}
              </StyledLabel>
            ))}
          </StyledFlyout>
        )}
      </StyledWrapper>
    </Flex>
  )
}

export default Filters
