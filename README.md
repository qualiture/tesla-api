# @qualiture/tesla-api
An unofficial library that wraps the Tesla Owner's API

> ## Warning!
>
>**This package was created for personal use!**
>
> Ever since Tesla changed its authentication mechanism mid 2021, I used a forked fix from [https://www.npmjs.com/package/teslajs](https://www.npmjs.com/package/teslajs) which mitigated that issue.
>
> However, since January 22nd, 2023 that fix no longer worked and threw a `HTTP 412 Precondition Failed` error upon retrieving vehicle details. It appeared I'm not the only one suffering from that issue (see for instance issue [https://github.com/teslamate-org/teslamate/issues/3629](https://github.com/teslamate-org/teslamate/issues/3629))
>
> And since the `teslajs` package seems no longer maintained, I took the plunge and created a simple package which suits my needs.
>
> The most notable change is that getting vehicle data no longer works the old way (via `GET /api/1/vehicles?page={page}`).
>
> Therefore, I'm now retrieving the products (via `GET /api/1/products?orders=true`) and in my specific case that returns an array of exactly one product, my vehicle :-)
>
> As such, when you own more products (Tesla Wall, Solar, or multiple cars), you may want to adapt this package. 

## Installation

Simply use 

```bash
npm i @qualiture/tesla-api
```

It contains type definitions, so you could use it directly into your TypeScript project.

Have fun!
