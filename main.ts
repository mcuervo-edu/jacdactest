modules.ledStrip1.onConnectionChanged(jacdac.ClientConnectionState.Connected, function () {
    modules.ledStrip1.configure(8, null)
})
basic.forever(function () {
    modules.ledStrip1.showAnimation(modules.ledPixelAnimations.rainbowCycle, 500)
    modules.ledStrip1.showAnimation(modules.ledPixelAnimations.firefly, 500)
    modules.ledStrip1.showAnimation(modules.ledPixelAnimations.runningLights, 500)
    modules.ledStrip1.showAnimation(modules.ledPixelAnimations.theatherChase, 500)
})
