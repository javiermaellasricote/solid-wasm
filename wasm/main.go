package main

import (
	"syscall/js"
)

func GetSum() js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		return args[0].Float() + args[1].Float()
	})
}

func main() {
	ch := make(chan struct{}, 0)

	js.Global().Set("getSum", GetSum())
	<-ch
}
