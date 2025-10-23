import './styles.scss'

type Size = 'big' | 'small'

interface SeparatorProps {
  size?: Size
  border?: boolean
}

export function Separator({ size = 'big', border = false }: SeparatorProps) {
  return (
    <>
      <div
        className={`separ ${size === 'small' ? 'separ--small' : ''} ${
          border ? 'separ--border' : ''
        }`}
      />
    </>
  )
}
