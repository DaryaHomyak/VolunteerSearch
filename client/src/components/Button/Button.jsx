import styles from './Button.module.scss'

export default function Button(props) {

  return (
    <button onClick={props?.onClick} className={styles.container}>{ props.children }</button>
  )
}