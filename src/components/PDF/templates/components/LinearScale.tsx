import cn from 'clsx';
import { GetRailProps, Rail, Slider, Ticks } from 'react-compound-slider';

import { Element } from '@/types/NettskjemaAPI';

import style from './linearScale.module.scss';

const Tick = ({
  tick,
  showTickValue,
  vertical,
  variedTicks,
}: {
  tick: { id: string; value: number; percent: number };
  showTickValue: boolean;
  vertical: boolean;
  variedTicks: boolean;
}) => {
  const tickValueLength = tick.value.toString().length;
  const marginLeftHorizontalTickValue =
    showTickValue && !vertical
      ? tickValueLength == 1
        ? 10
        : 8 - tickValueLength * 2
      : 0;
  const isVariedTick = variedTicks && tick.value % 2 !== 0;

  return (
    <div
      className={cn([
        style.tick,
        vertical && style.vertical,
        isVariedTick && style.variedTick,
      ])}
      style={
        vertical
          ? {
              top: `${tick.percent}%`,
            }
          : {
              left: `${tick.percent}%`,
            }
      }
    >
      {showTickValue && !isVariedTick && (
        <div
          className={cn([
            style.tickValue,
            vertical && style.vertical,
            variedTicks && style.variedTick,
          ])}
        >
          <span
            className={vertical ? style.vertical : undefined}
            style={{
              marginLeft: `${marginLeftHorizontalTickValue}px`,
            }}
          >
            {tick.value}
          </span>
        </div>
      )}
    </div>
  );
};

const TextMarkers = ({
  vertical,
  linearScaleType,
  maximumValue,
  minimumValue,
  maximumValueText,
  minimumValueText,
  midValueText,
  showTickValues,
}: {
  vertical: boolean;
  linearScaleType: Element['linearScaleType'];
  maximumValue: number;
  minimumValue: number;
  maximumValueText: string;
  minimumValueText: string;
  midValueText: string;
  showTickValues: boolean;
}) => {
  const displayMin =
    linearScaleType === 'TEXT_AND_NUM' || minimumValueText !== null
      ? minimumValueText
      : minimumValue;
  const displayMax =
    linearScaleType === 'TEXT_AND_NUM' || maximumValueText !== null
      ? maximumValueText
      : maximumValue;

  return (
    <div className={cn([style.endMarkers, vertical && style.vertical])}>
      {!vertical && (
        <div
          className={cn([
            style.text,
            style.endMarkerLeft,
            showTickValues && style.showTickValues,
          ])}
        >
          {displayMin}
        </div>
      )}

      {(linearScaleType === 'START_MID_END' ||
        linearScaleType === 'TEXT_AND_NUM') &&
        midValueText !== null && (
          <div
            className={cn([
              style.text,
              style.midMarker,
              vertical && style.vertical,
              showTickValues && style.showTickValues,
            ])}
          >
            {midValueText}
          </div>
        )}
      {!vertical && (
        <div
          className={cn([
            style.text,
            style.endMarkerRight,
            showTickValues && style.showTickValues,
          ])}
        >
          {displayMax}
        </div>
      )}
    </div>
  );
};

const RailComponent = ({
  getRailProps,
  vertical,
}: {
  getRailProps: GetRailProps;
  vertical: boolean;
}) => {
  return (
    <div
      className={cn([style.railContainer, vertical && style.vertical])}
      {...getRailProps()}
    >
      <div className={cn([style.rail, vertical && style.vertical])} />
    </div>
  );
};

const measureMaxValueWidth = (textContent: string) => {
  const ctx = document.createElement('canvas').getContext('2d');
  if (ctx) {
    ctx.font = 'bold 16px Arial';
    return ctx.measureText(textContent).width;
  }
  return 0;
};

const LinearScale = ({ element }: { element: Element }) => {
  const { linearScaleType } = element;
  const min = element.minimumValue ?? 0;
  const max = element.maximumValue ?? 10;
  const minimumValueText = element.minimumValueText ?? '';
  const midValueText = element.midValueText ?? '';
  const maximumValueText = element.maximumValueText ?? '';
  const vertical = !element.isHorizontal;

  const showTickValues =
    linearScaleType === 'ALL' || linearScaleType === 'TEXT_AND_NUM';

  const showStartEndText =
    linearScaleType !== 'ALL' && linearScaleType !== 'NONE';

  const showMidText =
    (linearScaleType === 'START_MID_END' ||
      linearScaleType === 'TEXT_AND_NUM') &&
    midValueText !== null;

  const clientWidthForMaxValue = maximumValueText
    ? measureMaxValueWidth(maximumValueText)
    : 0;

  const rangeMarkOffset = element.isRangeMarksShown ? 20 : 0;
  const marginLeftOnverticalEdgeText =
    104 + clientWidthForMaxValue + rangeMarkOffset;
  const marginLeftOnSliderContainer = vertical
    ? 145 + clientWidthForMaxValue + rangeMarkOffset
    : 0;

  const getTickValues = () => {
    if (!element.isRangeMarksShown) {
      return [min, max];
    } else {
      return undefined;
    }
  };

  const getNumberOfTicks = () => {
    if (min === 0 && max === 100) {
      return 20;
    }
    return max - min < 11 ? max - min : 11;
  };

  return (
    <div className={cn([style.slid, vertical && style.vertical])}>
      {vertical && (
        <div
          className={cn([style.verticalEdgeText, style.top])}
          style={{ marginLeft: `${marginLeftOnverticalEdgeText}px` }}
        >
          {maximumValueText}
        </div>
      )}
      <div className={cn([style.sliderBox, vertical && style.vertical])}>
        {linearScaleType !== 'ALL' &&
          linearScaleType !== 'NONE' &&
          ((!vertical && showStartEndText) || (vertical && showMidText)) && (
            <TextMarkers
              vertical={vertical}
              linearScaleType={linearScaleType}
              minimumValue={min}
              maximumValue={max}
              minimumValueText={minimumValueText}
              midValueText={midValueText}
              maximumValueText={maximumValueText}
              showTickValues={showTickValues}
            />
          )}
        <div style={{ marginLeft: marginLeftOnSliderContainer }}>
          <Slider
            vertical={vertical}
            reversed={vertical}
            className={cn([style.sliderContainer, vertical && style.vertical])}
            domain={[min, max]}
            step={1}
            mode={2}
            values={[-1]}
          >
            <Ticks count={getNumberOfTicks()} values={getTickValues()}>
              {({ ticks }) => (
                <div>
                  {[...ticks].reverse().map((tick) => {
                    return (
                      <Tick
                        variedTicks={getNumberOfTicks() === 20}
                        key={tick.id}
                        tick={tick}
                        showTickValue={showTickValues}
                        vertical={vertical}
                      />
                    );
                  })}
                </div>
              )}
            </Ticks>
            <Rail>
              {({ getRailProps }) => (
                <RailComponent
                  getRailProps={getRailProps}
                  vertical={vertical}
                />
              )}
            </Rail>
          </Slider>
        </div>
      </div>
      {vertical && (
        <div
          className={cn([style.verticalEdgeText, style.bottom])}
          style={{ marginLeft: `${marginLeftOnverticalEdgeText}px` }}
        >
          {minimumValueText}
        </div>
      )}
    </div>
  );
};

export default LinearScale;
