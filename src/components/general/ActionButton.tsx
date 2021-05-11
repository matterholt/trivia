import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface ActionButtonProps {
    name: string
    styleAttributes: string
    clickAction: () => void
    isdisabled: boolean
    children: React.ReactNode
}

const dynamicStyle = ({ customStyle }: { customStyle: string }) =>
    css`
        ${customStyle};
    `

const CustomButton = styled.button`
    ${dynamicStyle}
`

const ActionButton = ({
    name,
    styleAttributes,
    clickAction,
    isdisabled,
    children,
}: ActionButtonProps) => {
    return (
        <CustomButton
            customStyle={styleAttributes}
            name={name}
            disabled={isdisabled ? true : false}
            onClick={clickAction}
        >
            {children}
        </CustomButton>
    )
}

export default ActionButton
