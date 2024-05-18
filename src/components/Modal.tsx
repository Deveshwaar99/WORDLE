import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Dispatch, SetStateAction } from 'react'

type ModalProps = {
  word: string
  showModal: boolean
  isSuccess: boolean
  setShowModal?: Dispatch<SetStateAction<boolean>>
}

export default function Modal({ word, showModal, isSuccess, setShowModal }: ModalProps) {
  const wordDescription = (
    <>
      <span className="text-xl font-bold">{word.toUpperCase()}</span>
      <div className="mt-2 text-gray-600">Come back tomorrow for a new word challenge! 👋</div>
    </>
  )

  return (
    <Dialog open={showModal === true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isSuccess ? (
              <span className="text-green-500">Congratulations!</span>
            ) : (
              <span className="text-red-500">Unlucky!</span>
            )}
          </DialogTitle>
          <DialogDescription>
            {isSuccess ? (
              <>
                <span className="text-gray-700">You have successfully guessed the word {'  '}</span>
                {wordDescription}
              </>
            ) : (
              <>
                <span className="text-gray-700">
                  Unfortunately, you did not guess the correct word this time.
                </span>
                {wordDescription}
              </>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
