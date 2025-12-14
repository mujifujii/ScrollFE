import {Component, signal, WritableSignal} from '@angular/core';
import {ITextObject} from '../creating/type/interfaces/ITextObject';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-reading',
  imports: [MatCardModule],
  templateUrl: './reading.html',
  styleUrl: './reading.css',
  standalone: true
})
export class Reading {

  textsForReading:WritableSignal<ITextObject[]> = signal([
    // 7 short texts (~100 chars)
    { title: "Whispering Winds", author: "Alice Moore", text: "The wind carried secrets through the trees, only the leaves listened in silence and sway." },
    { title: "Falling Leaves", author: "Nora Patel", text: "Orange and red leaves tumbled down the street, swirling like memories in the wind." },
    { title: "Silver Rain", author: "Leo Harper", text: "Raindrops glinted silver against the night sky, dancing across rooftops and puddles below." },
    { title: "Lost Key", author: "Ethan Hayes", text: "In the garden, beneath a stone, the key waited for hands that had long forgotten it." },
    { title: "Silent Song", author: "Maya Lin", text: "She hummed a song with no words, and somehow the moon understood every note." },
    { title: "Midnight Tea", author: "Sophie Blake", text: "A cup of tea, the clock ticking softly, the house quiet except for wandering thoughts." },
    { title: "Paper Boats", author: "Oliver Grant", text: "Raindrops kissed the paper boats, carrying wishes down the narrow stream toward dreams." },

    // 7 medium texts (~500 chars)
    { title: "Lanterns in Fog", author: "Jacob Flynn", text: "Lanterns glowed dimly in the mist, like distant fireflies trapped in the morning fog. Each one flickered as if hesitant to reveal its light. Travelers passing through the street whispered softly, unsure if the glow was magic or just a trick of the fog. Somewhere far away, bells rang, and the echoes mingled with the quiet hum of the waking town, painting a picture of serenity and mystery." },
    { title: "Threads of Memory", author: "Isla Monroe", text: "She traced the threads of memory through old photographs, each image a whisper of another life. Faces smiled, eyes twinkled, and moments once lived came alive in her hands. The scent of old paper and the faint smell of ink drew her deeper, connecting her to times she never knew but somehow felt familiar. She wondered if memories lived in objects or if objects merely reminded us of the lives that had touched us." },
    { title: "Rust and Rain", author: "Clara Adams", text: "The old bicycle leaned against the wall, streaks of rust meeting falling rain. Each drop made a soft patter, echoing on the cobblestones. Memories of laughter, hurried rides, and forgotten adventures lingered in the air. The scent of wet metal mingled with damp earth as she ran her fingers over the worn handles, imagining the stories the bike could tell if it spoke." },
    { title: "Crimson Horizon", author: "Eva Solis", text: "The horizon blushed in crimson as the sun whispered goodbye to the day. Shadows stretched long across fields and rooftops. Birds flew homeward in scattered flocks, and the air smelled of cooling earth. In the distance, a dog barked, echoing faintly. Everything seemed suspended between light and dark, the world holding its breath before nightfall." },
    { title: "Morning Dew", author: "Henry Zhao", text: "Each blade of grass held a tiny world, reflecting light in morning dew drops. The garden shimmered like a mosaic of tiny mirrors, capturing the awakening sky. She knelt to inspect a single droplet, amazed at the miniature world it contained, a universe suspended in clarity, waiting to evaporate as the sun climbed higher." },
    { title: "Forgotten Path", author: "Noah Blake", text: "A path overgrown with moss led to a forgotten place, silent and waiting. Trees arched overhead, their branches forming a tunnel that whispered with the wind. Footsteps were soft against the damp earth, and the smell of wet leaves filled the air. Somewhere beyond, a creek murmured quietly. The path seemed timeless, untouched, a secret preserved by nature itself." },
    { title: "Stone Garden", author: "Lucas Reed", text: "The garden of stones spoke silently, each pebble holding stories of patience and time. Moss crept over edges, softening hardness. A gentle wind brushed across, carrying the faint scent of nearby flowers. Sitting there, one could hear echoes of footsteps long gone and imagine tales of those who walked before, each stone a keeper of memory." },

    // 6 long texts (~5000 chars)
    { title: "The Quiet Library", author: "Sophia Grant", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel justo et lorem efficitur ullamcorper. Donec non vulputate enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod, lorem ut sagittis dapibus, neque mi tincidunt nisl, ac tincidunt arcu ex ac libero. Quisque vitae tortor turpis. Vestibulum in lorem ac augue scelerisque hendrerit. Sed laoreet arcu a nulla sollicitudin, et tincidunt leo scelerisque. Vivamus vitae finibus nunc. Morbi id ante eu risus consectetur tincidunt. Suspendisse potenti. Curabitur a justo a justo posuere ultrices. Donec sed felis magna. Cras tempor, massa a faucibus luctus, enim nulla fringilla libero, ut vehicula nulla magna sed lorem. Aliquam erat volutpat. Aenean ut erat vitae sapien congue lacinia. Phasellus sed elit et magna imperdiet elementum. Integer venenatis varius purus, vel faucibus enim sollicitudin in. Morbi eu justo id libero dapibus tincidunt. Sed nec quam non nulla vestibulum facilisis. Cras id metus eget lorem sodales tincidunt. Praesent accumsan metus at lorem suscipit, vel sagittis erat scelerisque. Nullam pharetra purus ac sapien efficitur, nec hendrerit augue tincidunt. Integer tincidunt massa id justo gravida, sed tempor libero volutpat. Cras ac ligula ut lectus volutpat suscipit. Donec non odio in nisl rhoncus malesuada. Phasellus vel purus sed lacus vehicula finibus. Aenean ac eros id justo tincidunt sollicitudin. Integer nec commodo magna, vel facilisis velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sagittis elit sed orci finibus, in commodo lacus dictum. [Repeat filler until ~5000 chars]" },
    { title: "Twilight Whispers", author: "Aria Bennett", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod metus non ligula dapibus, ac rhoncus purus tincidunt. Vestibulum viverra, est non dapibus ultrices, ligula odio imperdiet ligula, id malesuada lectus nibh a lorem. Cras sed nisi sed lectus gravida gravida. Integer vitae lectus non erat laoreet convallis. Sed lacinia, arcu sed sagittis faucibus, augue risus tristique velit, in dapibus dolor leo nec nisl. [Repeat filler until ~5000 chars]" },
    { title: "Hidden River", author: "Jack Thompson", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non urna id ligula convallis dictum. Curabitur sit amet dapibus dolor. Nam gravida, leo a hendrerit sollicitudin, nunc turpis fermentum nisl, non bibendum ligula arcu ut sapien. [Repeat filler until ~5000 chars]" },
    { title: "Paper Lantern Wishes", author: "Lila Chen", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae libero eget sapien bibendum fermentum. Sed nec eros felis. Integer in ex non dolor euismod volutpat. [Repeat filler until ~5000 chars]" },
    { title: "Echoes of Laughter", author: "Amelia Frost", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dolor ut purus tincidunt malesuada. Nullam eu facilisis magna. [Repeat filler until ~5000 chars]" },
    { title: "Rustling Memories", author: "Clara Johnson", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. [Repeat filler until ~5000 chars]" }
  ])
}
