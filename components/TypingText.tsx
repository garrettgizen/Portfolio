import React, { useEffect, useState, useRef } from "react";
import { useShowSplash } from "./SplashScreen";

interface TypingTextProps {
  steps: string[];
  pause?: number;
  speed?: number;
  deleting?: number;
  className?: string;
}

export default function TypingText({
  steps,
  pause = 1000,
  speed = 100,
  deleting = 40,
  className,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState(steps[0] ?? "");
  const finishedAnimation = useRef(false);

  const showSplash = useShowSplash();

  useEffect(() => {
    finishedAnimation.current = false;

    /**
     * Pauses the typing animation for a specified duration.
     * @param duration - The duration to pause in milliseconds.
     * @returns A Promise that resolves when the pause is complete.
     */
    const pauseTyping = (duration: number): Promise<void> => {
      return new Promise((resolve) => setTimeout(resolve, duration));
    };

    /**
     * Animates the typing of a word character by character. Adds one character at a time
     * to the displayed text at the interval defined by `speed`, updating `displayedText`
     * @param word - The string to be typed character by character.
     * @returns A Promise that resolves when typing is complete.
     */
    async function typeWord(word: string): Promise<void> {
      return new Promise((resolve) => {
        let currentIndex = 0;
        const interval = setInterval(() => {
          currentIndex += 1;
          setDisplayedText(word.slice(0, currentIndex));
          if (currentIndex === word.length || finishedAnimation.current) {
            clearInterval(interval);
            resolve();
          }
        }, speed);
      });
    }

    /**
     * Animates the deletion of a word character by character.
     * Removes one character at a time from the end of the word
     * at the interval defined by `deleting`, updating `displayedText`
     * on each tick. Resolves when the word has been fully deleted.
     *
     * @param word - The string to be deleted character by character.
     * @returns A Promise that resolves when deletion is complete.
     */
    async function deleteWord(word: string): Promise<void> {
      return new Promise((resolve) => {
        let currentIndex = word.length;
        const interval = setInterval(() => {
          currentIndex -= 1;
          setDisplayedText(word.slice(0, currentIndex));
          if (currentIndex === 0 || finishedAnimation.current) {
            clearInterval(interval);
            resolve();
          }
        }, deleting);
      });
    }

    const typeEffect = async () => {
      for (const [index, word] of steps.entries()) {
        if (finishedAnimation.current) {
          return;
        }
        if (index === 0) {
          await pauseTyping(pause);
          await deleteWord(word);
        } else if (index === steps.length - 1) {
          await typeWord(word);
        } else {
          await typeWord(word);
          await pauseTyping(pause);
          await deleteWord(word);
        }
      }
    };
    if (!showSplash) {
      typeEffect();
    }

    return () => {
      finishedAnimation.current = true;
    };
  }, [steps]);

  return (
    <div className={`${className} typing-text-cursor`}>{displayedText}</div>
  );
}
