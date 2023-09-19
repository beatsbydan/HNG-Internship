import {useContext} from 'react'
import ProcessingContext from '../UI/IsProcessing/ProcessingContext/ProcessingContext'

const useIsProcessing = () => useContext(ProcessingContext)

export default useIsProcessing;