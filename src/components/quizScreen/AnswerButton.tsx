import React, { FC } from 'react'
import styled from '@emotion/styled'

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
    primary:boolean
}
const AnswerButtonStyle = styled(Component) <StyledProps>`
    border:none;
    border-radius: 15px;
    font-size:1.5rem;
    padding:5px 20px;
    background-color: ${({ primary }: any) => primary ? '#b8ffb2' : 'white'};
    
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
            primary={isSelected}
            label={ label}
        />
    )
}
export default AnswerButton