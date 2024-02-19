import React, { Fragment, useState, useEffect } from 'react'

export default function Text2Speech({ text }) {
    const [isPaused, setIsPaused] = useState(false);
    const [utterance, setUtterance] = useState(null);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);

        setUtterance(u);
        !!text && handlePlay(u)

        return () => {
            synth.cancel();
        };
    }, [text]);

    const handlePlay = (u) => {
        const synth = window.speechSynthesis;
        const u_new = u || utterance
        u_new.rate = 0.6
        u_new.lang = "zh-TW"
        u_new.volume = 1

        if (isPaused) {
            synth.resume();
        }

        synth.speak(u_new);

        setIsPaused(false);
    };

    const handlePause = () => {
        const synth = window.speechSynthesis;

        synth.pause();

        setIsPaused(true);
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;

        synth.cancel();

        setIsPaused(false);
    };

    return (
        <Fragment>
        </Fragment>
    );
}