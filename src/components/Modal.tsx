import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { Dispatch, SetStateAction } from 'react'

type ModalProps = {
  word: string
  showModal: boolean
  isSuccess: boolean
  setShowModal?: Dispatch<SetStateAction<boolean>>
  currentStreak: number
}

export default function Modal({ word, showModal, isSuccess, currentStreak }: ModalProps) {
  return (
    <Dialog open={showModal}>
      <DialogContent className="max-[460px] w-full rounded-lg bg-gray-900 p-8">
        <DialogHeader>
          <DialogTitle>
            <div
              className={cn(
                'text-center text-3xl font-bold',
                isSuccess ? 'text-emerald-400' : 'text-rose-500'
              )}
            >
              {isSuccess ? 'Congratulations!' : 'Unlucky!'}
            </div>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="mt-8 text-center text-gray-200">
            <span className="block text-4xl font-bold text-white">{word.toUpperCase()}</span>
            {currentStreak > 0 && (
              <div className="mt-6 rounded-lg bg-gray-800 px-4 py-2 text-center text-sm text-gray-300">
                Current Streak: <span className="font-bold text-white">{currentStreak}</span>
              </div>
            )}
          </div>
          <div className="mt-8 text-gray-400">
            <span>
              {isSuccess
                ? 'You have successfully guessed the word'
                : 'Unfortunately, you did not guess the correct word this time.'}
            </span>
            <div className="mt-2">Come back tomorrow for a new word challenge! 👋</div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
