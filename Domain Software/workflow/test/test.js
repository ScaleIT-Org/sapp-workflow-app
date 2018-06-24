import { Selector } from 'testcafe';

fixture `Workflow App Tests`
    .page `http://localhost:3000/`;

test('IsRunning Test', async t => {
    await t
        .expect(Selector('#heading').innerText).eql('Workflow App (Bootstrap)');
});

test('qrcode-btn test', async t => {
    await t
    	.expect(Selector('#qrcode-btn').hasAttribute('disabled')).notOk()
        .click('#qrcode-btn')
        .expect(Selector('#qrcode-btn').hasAttribute('disabled')).ok();
});