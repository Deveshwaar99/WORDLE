import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type ModalProps = {
  word: string
  showModal: boolean
  isSuccess: boolean
}

export default function Modal({ word, showModal, isSuccess }: ModalProps) {
  return (
    <>
      <Dialog open={showModal} modal={true}>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isSuccess ? <span>Congratulations!</span> : <span>Unlucky!</span>}
            </DialogTitle>
            <DialogDescription>
              {isSuccess ? (
                <span>You have successfully guessed the word</span>
              ) : (
                <span>
                  The correct word is{' '}
                  <span className=" font-bold size-10">{word.toUpperCase()}</span>
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
