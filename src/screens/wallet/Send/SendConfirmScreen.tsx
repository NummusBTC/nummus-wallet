import React, { useEffect } from 'react'
import { Stack } from 'expo-router'
import { BackButton } from '@/src/components/ui/Navigation/BackButton'
import SafeAreaContainer from '@/src/components/layout/SafeAreaContainer'
import TransactionSummaryFooter from '@/src/components/features/Send/Confirmation/TransactionSummaryFooter'
import { useSendNavigation } from '@/src/components/ui/Navigation/sendNavigation'
import { useTransactionParams } from '@/src/hooks/send/useTransactionParams'
import { transactionStyles } from '@/src/constants/transactionStyles'
import { useSendStore } from '@/src/store/sendStore'

/**
 * Screen for confirming transaction details before sending
 */
export default function SendConfirmScreen() {
  const { navigateBack, navigateToSendLoading } = useSendNavigation()
  const { setErrorMode } = useSendStore()
  const { 
    amount, 
    address, 
    feeSats,
    feeRate,
    currency, 
    totalAmount,
  } = useTransactionParams()
  
  // Reset error mode when mounting this screen
  useEffect(() => {
    setErrorMode('none')
  }, [ setErrorMode ])
  
  return (
    <SafeAreaContainer style={transactionStyles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Back Button */}
      <BackButton onPress={navigateBack} />
      
      {/* Transaction Summary with Send Button */}
      <TransactionSummaryFooter
        amount={amount}
        address={address}
        feeSats={feeSats}
        feeRate={feeRate}
        currency={currency}
        totalAmount={totalAmount}
        onSendPress={navigateToSendLoading}
      />
    </SafeAreaContainer>
  )
} 