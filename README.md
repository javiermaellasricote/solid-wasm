# This is a test of WASM inside a SolidJS project.

WASM function written in Go. It returns the sum
of two numbers passed from JS.

SolidJS displays result and allows to increment values

## To compile WASM
```
cd wasm
GOOS=js GOARCH=wasm go build -o ../app/wasm/getSum.wasm
```

## To serve SolidJS
```
cd app
npm i
npm run dev
```
