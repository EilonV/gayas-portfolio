// DRAG
import day from '../assets/images/projects/drag/main-day.png'
import night from '../assets/images/projects/drag/main-night.png'
import sashaDay from '../assets/images/projects/drag/sasha-day.png'
import sashaNight from '../assets/images/projects/drag/sasha-night.png'
import yvieTextDay from '../assets/images/projects/drag/yvie-text-day.png'
import yvieTextNight from '../assets/images/projects/drag/yvie-text.png'

// ENCYCLOPEDIA
import details from '../assets/images/projects/encyclopedia/details.png'
import emotion from '../assets/images/projects/encyclopedia/emotion.png'
import example1 from '../assets/images/projects/encyclopedia/example1.png'
import main from '../assets/images/projects/encyclopedia/main.png'

// WITTIER
import first from '../assets/images/projects/wittier/first.png'
import wittMain from '../assets/images/projects/wittier/main.png'

// WINWIN
import home from '../assets/images/projects/winwin/home.png'
import home2 from '../assets/images/projects/winwin/home2.png'
import input from '../assets/images/projects/winwin/input.png'
import intro from '../assets/images/projects/winwin/intro.png'
import login from '../assets/images/projects/winwin/login.png'
import map from '../assets/images/projects/winwin/map.png'
import prechat from '../assets/images/projects/winwin/prechat.png'
import profile from '../assets/images/projects/winwin/profile.png'
import success from '../assets/images/projects/winwin/success.png'

export const projects = [
    {
        title: "DRAG",
        desc: "idk its something about drags gaya gotta write something",
        isApp: false,
        num: 0,
        imgs: [day, night, sashaDay, sashaNight, yvieTextDay, yvieTextNight],

    },
    {
        title: "Idea encyclopedia",
        desc: "kjhasgd22222222222222kjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjk",
        isApp: false,
        imgs: [details, emotion, example1, main],
        num: 1
    },
    {
        title: "Wittier",
        desc: "kjhasgdkjahsdg333333333hjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjk",
        isApp: false,
        imgs: [first, wittMain],
        num: 2
    },
    {
        title: "WinWin",
        desc: "kjhaskjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjkkjhasgdkjahsdghjk",
        isApp: true,
        imgs: [home, home2, input, intro, login, map, prechat, profile, success],
        num: 3
    }
]