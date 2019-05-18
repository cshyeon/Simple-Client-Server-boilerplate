class Test {
  abc() {
    const sentence = 'test abc';
    return sentence;
  }

  async asyncAbc({str} = {str: 'default string'}) {
    const done = await new Promise(resolve => {
      const timer = setTimeout(() => {
        const doneMessage = `${str} done`;
        console.log(doneMessage); 
        resolve(doneMessage);
      }, 2000);
    });

    return done;
  }
}

module.exports = Test;
