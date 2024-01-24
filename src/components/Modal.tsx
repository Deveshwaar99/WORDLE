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
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export default function Modal({ word, showModal, isSuccess, setShowModal }: ModalProps) {
  const wordDescription = (
    <>
      <span className="font-bold text-xl">{word.toUpperCase()}</span>
      <div className="text-gray-600 mt-2">Come back tomorrow for a new word challenge! 👋</div>
    </>
  )

  return (
    <Dialog open={showModal === true} onOpenChange={() => setShowModal(false)}>
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
                <span className="text-gray-700">You have successfully guessed the word </span>
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
