import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Dispatch, SetStateAction } from 'react'

type ModalProps = {
  word: string
  showModal: boolean
  isSuccess: boolean
  setShowModal?: Dispatch<SetStateAction<boolean>>
  currentStreak: number
}

export default function Modal({ word, showModal, isSuccess, currentStreak }: ModalProps) {
  const wordDescription = (
    <>
      <span className="text-xl font-bold text-gray-50">{word.toUpperCase()}</span>
      <div className="mt-2 text-slate-200">Come back tomorrow for a new word challenge! 👋</div>
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
                <span className="mr-2 text-slate-200">You have successfully guessed the word </span>
                {wordDescription}
              </>
            ) : (
              <>
                <span className="text-slate-200">
                  Unfortunately, you did not guess the correct word this time.
                </span>
                {wordDescription}
              </>
            )}
            {currentStreak ? (
              <div className="my-2 text-base text-slate-200">
                Current Streak <span className="text-slate-200"> {currentStreak}</span>
              </div>
            ) : null}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
