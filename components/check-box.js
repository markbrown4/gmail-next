import classNames from 'classnames'

export default ({
  selected,
  someSelected,
  onChange
}) => (
  <span
    className={classNames('check', {selected, 'some-selected': someSelected && !selected})}
    onClick={onChange}
  >
    <style jsx>{`
    .check {
      float: left;
      height: 11px;
      width: 11px;
      background: rgba(#fff, .2);
      border: 1px solid rgba(155, 155, 155, .57);
      margin: 1px 10px 0 0;
      position: relative;
    }
    .check:hover {
      box-shadow: inset 0 2px 2px rgba(0,0,0, .1);
    }
    .check:after {
      display: none;
      content: '';
      position: absolute;
      height: 21px;
      width: 21px;
      top: -5px;
      left: -5px;
      background: url(/static/icons/checkmark.png);
    }
    .selected, .some-selected {
      background: rgba(#fff, .7);
    }
    .selected:after, .some-selected:after {
      display: block;
    }
    .some-selected:after {
      background: url(/static/icons/checkmark-partial.png);
    }
    `}</style>
  </span>
)
