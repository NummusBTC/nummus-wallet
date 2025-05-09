import React from 'react'
import StatusScreen from '@/src/components/ui/Feedback/StatusScreen'
import { ErrorHandlingCallbacks } from '@/src/types/callbacks'

type ErrorImportProps = Pick<ErrorHandlingCallbacks, 'onTryAgain' | 'onBack'>

/**
 * Screen displayed when wallet import fails
 */
export default function ErrorImport({ onTryAgain, onBack }: ErrorImportProps) {
  return (
    <StatusScreen
      type="error"
      title="Import Failed"
      subtitle="We couldn't verify your seed phrase. Please check it and try again."
      primaryButtonLabel="Try Again"
      onPrimaryAction={onTryAgain}
      onBack={onBack}
      useLeftArrow={true}
    />
  )
}
