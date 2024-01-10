import React from 'react'
import ModalRegistration from '../../components/modalRegistration/modalRegistration'
import { useIsRegContext } from '../../context/userContext/userContext'

const Modal = () => {
	const isReg = useIsRegContext()
	return <>{isReg && <ModalRegistration titleRegistration={'Sign up'} />}</>
}

export default Modal
