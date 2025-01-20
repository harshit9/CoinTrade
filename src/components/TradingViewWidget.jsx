import { useEffect, useRef } from 'react';

function TradingViewWidget( { symbol }) {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BYBIT:${symbol}USDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "hide_top_toolbar": true,
          "allow_symbol_change": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    [symbol]
  );

  return (
    <div className="tradingview-widget-container" ref={container} >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default TradingViewWidget;