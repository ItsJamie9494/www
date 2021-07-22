import { StyledSpinner } from './style'

export const Spinner = ({ size }: { size: number }) => {
    return (
        <div
            style={{
                margin: '0 10px',
                padding: 0,
                width: size,
                height: size,
            }}
        >
            <StyledSpinner size={size} />
        </div>
    )
}
