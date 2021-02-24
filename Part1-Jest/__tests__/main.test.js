const formatVolumeIconPath = require('../assets/scripts/main')

describe('formatVolumeIconPath test', ()=>{
    test('when volume greater than 66', ()=>{
        expect(formatVolumeIconPath(70)).toBe(`./assets/media/icons/volume-level-3.svg`)
    }) 
    test('when volume in between 66(inclusive) and 33(non inclusive)', ()=>{
        expect(formatVolumeIconPath(60)).toBe(`./assets/media/icons/volume-level-2.svg`)
    })
    test('when volume between 0 (non inclusive) and 33(inclusive)', ()=>{
        expect(formatVolumeIconPath(20)).toBe(`./assets/media/icons/volume-level-1.svg`)
    })
    test('when volume less than 0', ()=>{
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`)
    })
})
