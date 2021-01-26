import React from 'react'
import { Template } from '../../components/template'
import { CircularProgressBar } from './components/CircularProgressBar'
import { SimpleTransition } from './components/SimpleTransition'
import { SubmitButton } from './components/SubmitButton'

export const Dan = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    if (progress < 100) {
      setTimeout(() => setProgress(progress + 1), 500);
    } else {
      setProgress('BOOOOM!');
    }
  });
  return (
    <Template>
      <div>
        Circular progress bar <CircularProgressBar from={0} to={100} />

        SimpleTransition
        <SimpleTransition />

        Submit Button
        <SubmitButton>Xambras</SubmitButton>
      </div>
    </Template>
  )
}
