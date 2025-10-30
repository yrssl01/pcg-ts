import './styles.scss'

type Size = 'big' | 'small'

type Border = 'top' | 'bottom' | ''

interface SeparatorProps {
  size?: Size
  border?: Border
}

export function Separator({ size = 'big', border = '' }: SeparatorProps) {
  return (
    <>
      <div
        className={`separ ${size === 'small' ? 'separ--small' : ''} ${
          border ? `separ--border-${border}` : ''
        }`}
      />
    </>
  )
}
