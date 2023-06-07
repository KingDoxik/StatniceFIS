import classNames from 'clsx'

function LogomarkPaths() {
  return <span className="text-xl font-bold text-[#00957D]">FIS</span>
}

export function Logomark(props) {
  return (
    <span className="flex flex-row space-x-2" {...props}>
      <LogomarkPaths />
    </span>
  )
}

export function Logo(props) {
  return (
    <span
      {...props}
      className={classNames('flex flex-row space-x-2', props.className)}
    >
      <LogomarkPaths />
      <span className="text-xl text-gray-900 dark:text-white">Státnice</span>
    </span>
  )
}
