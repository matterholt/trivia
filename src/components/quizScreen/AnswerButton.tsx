import React, { FC } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface ComponentProps {
  className?: string
  label: string
  handleAnsweredUpdate :(users_answer :string)=>void
}

const Component: FC<ComponentProps> = ({
  label,
  className,
  handleAnsweredUpdate
}) => <button className={className}
    name="answerTrue"
    type="button"
    value={label}
    onClick={()=>handleAnsweredUpdate(label) }
    >{label}</button>
    
interface StyledProps{
    isSelected:boolean
}

const selected  = () => css`
     color: white;
    background-color: var(--main-blue);
    border: 2px solid #00000073;
    box-shadow:  4px 5px 9px #0000004a;
  `
const base = () => css`
    color: var(--main-blue);
    background-color:   white;
    border:2px solid gray;
    box-shadow: none;
`

const AnswerButtonStyle = styled(Component) <StyledProps>`
    border:none;
    border-radius: 15px;
    font-size:1.5rem;
    padding:5px 20px;
    ${({ isSelected }: any) => isSelected ? selected : base}
  &:hover {
    background-color: var(--main-blue);
    color:var(--main-ltBlue);
    cursor: pointer;
  }
    `

interface AnswerButtonProps{
    label : string,
    selectValue: string
    handleAnsweredUpdate :(users_answer :string)=>void
}
    
const AnswerButton: FC<AnswerButtonProps> = ({ label,selectValue,handleAnsweredUpdate }) => {
    const isSelected = label === selectValue
    return (
        <AnswerButtonStyle
            handleAnsweredUpdate={handleAnsweredUpdate}
            isSelected={isSelected}
            label={ label}
        />
    )
}
export default AnswerButton