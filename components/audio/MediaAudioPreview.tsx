import { FC, MouseEvent, useCallback, useRef } from 'react';
import { useWavesurfer } from '@wavesurfer/react';
import classNames from 'classnames';
import { HiPlay, HiStop, HiX } from 'react-icons/hi';

interface MediaAudioPreviewProps {
  fileUrl: string;
  onClose?: () => void;
  hideTimer?: boolean;
  containerClassName?: string;
}

const formatTime = (seconds: number) =>
  [seconds / 60, seconds % 60].map((v) => `0${Math.floor(v)}`.slice(-2)).join(':');

export const MediaAudioPreview: FC<MediaAudioPreviewProps> = ({
  fileUrl,
  onClose,
  hideTimer = false,
  containerClassName = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    height: 22,
    waveColor: 'rgba(255, 255, 255, 0.5)',
    progressColor: 'rgb(255, 255, 255)',
    url: fileUrl,
    barWidth: 3,
    barGap: 1,
    barRadius: 1,
    cursorWidth: 0,
  });

  const onPlayPause = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (wavesurfer) {
        void wavesurfer.playPause();
      }
    },
    [wavesurfer],
  );

  return (
    <div className="flex items-center p-1 pr-2 mr-2 border-2 border-transparent rounded-3xl bg-white/10 h-9">
      <button
        onClick={onPlayPause}
        type="button"
        className="flex items-center justify-center w-6 h-6 bg-white rounded-full text-juicy-red shrink-0"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <HiStop size={12} /> : <HiPlay size={12} />}
      </button>

      <div className={classNames('w-48 px-2', containerClassName)} ref={containerRef} />

      {!hideTimer && <p className="pr-2 text-white/70 text-notes">{formatTime(currentTime)}</p>}

      {onClose && (
        <button
          type="button"
          className="flex items-center justify-center w-6 h-6 text-white/50"
          onClick={onClose}
          aria-label="Close"
        >
          <HiX size={16} />
        </button>
      )}
    </div>
  );
};
