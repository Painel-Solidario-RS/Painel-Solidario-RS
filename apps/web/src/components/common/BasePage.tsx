import BackArrowHeader from '../icons/BackArrowHeader'
import './BasePage.css'

interface BasePageProps {
  title: string
  subtitle?: string
  leftIcon?: boolean
  rightIcon?: JSX.Element | null
  children: string | JSX.Element | JSX.Element[]
}

/**
 *
 * @param leftIcon true quando quiser apresentar arrow
 * @param title titulo central da página
 * @param rightIcon passar o componente svf quando quiser apresentar icone à direita
 * @param children restante do contúdo da pagina
 * @returns um componente base dinamico para as telas do aplicativo
 */

const BasePage: React.FC<BasePageProps> = ({
  leftIcon = false,
  title,
  rightIcon = null,
  children
}) => {
  return (
    <div className="base-page-container">
      <div className="base-page-title-container">
        <div className="base-page-left-icon">
          {leftIcon ? <BackArrowHeader /> : ''}
        </div>
        <div className="base-page-title dark-base-color">{title}</div>
        <div className="base-page-right-icon">
          {rightIcon ? rightIcon : null}{' '}
        </div>
      </div>
      <div className="base-page-children">{children}</div>
    </div>
  )
}

export default BasePage
