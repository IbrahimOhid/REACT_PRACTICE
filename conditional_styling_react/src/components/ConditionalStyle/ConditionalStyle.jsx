import { useState } from 'react';

function ConditionalStyle() {
    const [changeColor, setChangeColor] = useState(false);
    const changeBg = ()=>{
      setChangeColor(!changeColor);
    }
    const commonStyle = {
    backgroundColor: changeColor ? '#fff' : '#000',
    color: changeColor ? '#000' : '#fff',
  };

  const btnStyle = {
    backgroundColor: 'blue',
    color: '#fff',
    padding: '5px 15px',
    margin: '10px 44% '
  }
  
  return (
    <div >
      <div style={commonStyle} className="px-10 py-2">
      <p className="px-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi aliquam
        soluta corporis porro? Nobis necessitatibus saepe voluptatum, accusamus
        corrupti qui vero quisquam. Adipisci quaerat, beatae atque dolores
        dolorem nulla sint aut corporis itaque nam quibusdam officia dolor
        corrupti hic ab, quos qui magni sequi quae explicabo. Excepturi quisquam
        aliquid quidem, sequi voluptates unde, aspernatur dolore vel accusantium
        numquam sint blanditiis voluptatibus fugit, molestiae voluptate.
        Explicabo veniam nostrum voluptates recusandae aut, maiores totam
        mollitia nulla minima possimus perspiciatis doloremque eius quae numquam
        quod itaque velit! Amet at, quam aperiam dolorem quos voluptate facere!
        Qui maxime fugiat quod. Architecto ratione dolores perferendis vitae
        odit saepe nulla quisquam officiis, incidunt culpa reprehenderit debitis
        suscipit repudiandae velit ad deleniti quis! Omnis numquam enim officia
        eaque doloremque architecto quasi alias dignissimos explicabo molestiae
        error assumenda pariatur veritatis facere tenetur optio repellat soluta
        sint odio aut earum, recusandae tempora. Aliquam laudantium expedita,
        tempore iste dicta sint voluptatem laborum ab eum distinctio? Optio a
        debitis hic, eos deleniti possimus qui voluptate animi aliquid aut
        omnis, dolorem laborum fugit iste magni dignissimos ipsum voluptatum
        reprehenderit cum! Voluptas quisquam maxime asperiores laborum nulla
        eveniet vero voluptatem ipsum veniam quia non quae totam, ducimus
        repellat consequatur quis explicabo deleniti suscipit tempora? Facere
        maxime iste vitae fuga ducimus provident cumque incidunt delectus atque?
        Veritatis vitae nesciunt, temporibus quisquam modi beatae, voluptate
        mollitia, provident repellendus natus aut corporis! Aliquid sunt nisi
        omnis libero quos quo quisquam eum quia aspernatur nemo fugit adipisci
        non ipsa explicabo eius numquam possimus officia accusantium laboriosam,
        nam architecto? Enim voluptatem omnis suscipit quam distinctio dolorem
        error quod adipisci nostrum similique accusamus, ab neque corrupti
        aspernatur modi mollitia, eos, ipsum quae debitis magnam dicta iste.
        Libero esse qui minus quidem, accusantium perspiciatis tenetur
        reiciendis! Quas illo omnis, harum esse tempore laboriosam temporibus
        fugit perspiciatis at reiciendis, fuga aspernatur voluptatem distinctio
        impedit beatae magnam et nam minus cupiditate voluptate ullam nobis
        quaerat dicta. Omnis velit doloribus cumque quisquam? Est at consectetur
        odit? Officia nihil beatae numquam dolor tempore ratione cumque deserunt
        fugiat quas sequi quo, modi obcaecati ullam perferendis odio unde
        impedit soluta vitae provident sint esse. Voluptas illum quasi maxime
        consequuntur saepe modi sed fugiat delectus eveniet libero explicabo
        dolorem quia quidem consequatur nemo optio natus, earum rem voluptates
        quibusdam officiis architecto? Autem mollitia inventore praesentium
        deleniti laborum nobis deserunt doloremque consectetur dolor.
        Praesentium aperiam vero commodi vel, repudiandae tempora ex impedit
        modi. Dicta possimus illum nemo eligendi ex aperiam. Consequuntur eaque
        ea distinctio excepturi? Perferendis fugit ullam at quas ex maiores
        libero culpa accusamus? Ullam ab adipisci sequi ipsa alias quaerat,
        voluptate minus omnis repudiandae quibusdam sed rerum doloremque
        cupiditate molestiae deserunt magnam eum magni autem dicta dolorem quis
        accusamus ad nostrum officiis! Autem, similique, voluptatem rem neque
        quaerat voluptate earum at animi soluta, iusto saepe totam. Corporis cum
        earum perspiciatis odio maiores veritatis fuga praesentium sequi beatae
        saepe aperiam harum modi minus culpa doloremque corrupti ad delectus
        optio eos, sapiente laudantium. Saepe maxime voluptates mollitia,
        aliquam dolores, aspernatur, laudantium delectus animi corporis minus
        quos nemo natus.
      </p></div>
      <button onClick={changeBg} style={btnStyle}>Change Color</button>
    </div>
  );
}

export default ConditionalStyle;
