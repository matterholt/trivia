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
const AnswerButtonStyle = styled(Component)<StyledProps>`
    background-color: ${({primary}:any) =>primary ? 'hotpink' : 'turquoise'};
    `

interface AnswerButtonProps{
    label : string,
    selectValue: string
    handleAnsweredUpdate :(users_answer :string)=>void
}
    
const AnswerButton = ({ label,selectValue,handleAnsweredUpdate }:AnswerButtonProps) => {
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