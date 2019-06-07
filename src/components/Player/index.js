import React from 'react';
import Slider from 'rc-slider';

import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

export default function Player() {
  return (
    <Container>
      <Current>
        <img
          src="https://s9.limitedrun.com/images/1265295/v600_childish_gambino_awaken_my_love_lp.jpg"
          alt="Album Cover"
        />

        <div>
          <span>This is America</span>
          <small>Childish Gambino</small>
        </div>
      </Current>

      <Progress>
        <Controls>
          <button>
            <img src={ShuffleIcon} alt="Suffle" />
          </button>
          <button>
            <img src={BackwardIcon} alt="Backward" />
          </button>
          <button>
            <img src={PlayIcon} alt="Play" />
          </button>
          <button>
            <img src={ForwardIcon} alt="Forward" />
          </button>
          <button>
            <img src={RepeatIcon} alt="Repeat" />
          </button>
        </Controls>

        <Time>
          <span>1:39</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: '#404040', borderRadius: 10 }}
              trackStyle={{ background: '#1ed760' }}
              handleStyle={{ border: 0 }}
            />
          </ProgressSlider>
          <span>4:20</span>
        </Time>
      </Progress>

      <Volume>
        <img src={VolumeIcon} alt="Volume" />
        <Slider
          railStyle={{ background: '#404040', borderRadius: 10 }}
          trackStyle={{ background: '#fff' }}
          handleStyle={{ display: 'none' }}
          value={100}
        />
      </Volume>
    </Container>
  );
}