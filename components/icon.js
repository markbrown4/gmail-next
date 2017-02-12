export default ({
  name
}) => (
  <i className={`icon icon-${name}`}>
    <style jsx>{`
    .icon {
      display: inline-block;
      background-size: 100%;
      vertical-align: middle;
    }
    .icon-archive {
      background-image: url(/static/icons/archive.png);
      width: calc(28px / 2);
      height: calc(24px / 2);
    }
    .icon-back {
      background-image: url(/static/icons/back.png);
      width: calc(28px / 2);
      height: calc(20px / 2);
    }
    .icon-delete {
      background-image: url(/static/icons/delete.png);
      width: calc(24px / 2);
      height: calc(30px / 2);
    }
    .icon-down {
      background-image: url(/static/icons/down.png);
      width: calc(14px / 2);
      height: calc(8px / 2);
    }
    .icon-next {
      background-image: url(/static/icons/next.png);
      width: calc(16px / 2);
      height: calc(26px / 2);
    }
    .icon-prev {
      background-image: url(/static/icons/prev.png);
      width: calc(16px / 2);
      height: calc(26px / 2);
    }
    .icon-refresh {
      background-image: url(/static/icons/refresh.png);
      width: calc(28px / 2);
      height: calc(28px / 2);
    }
    .icon-reply {
      background-image: url(/static/icons/reply.png);
      width: calc(26px / 2);
      height: calc(23px / 2);
    }
    .icon-search {
      background-image: url(/static/icons/search.png);
      width: calc(31px / 2);
      height: calc(30px / 2);
    }
    .icon-spam {
      background-image: url(/static/icons/spam.png);
      width: calc(28px / 2);
      height: calc(28px / 2);
    }
    `}</style>
  </i>
)
