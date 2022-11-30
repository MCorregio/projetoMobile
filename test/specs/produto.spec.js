

describe('Compra ate pagina do produto', () => {
    before(async () => {
        const tituloProdutos = '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.view.ViewGroup/android.widget.TextView';

        await $(tituloProdutos).WaitForDisplayd();
    });

    it('Seleciona o produto Mochila', async () => {
        const produto = '//android.widget.ImageView[@content-desc="Displays selected product"]';
        await $(produto).click();

        const nomeProduto = '//android.widget.ImageView[@content-desc="Displays selected product"]';
        expect(await $(nomeProduto).getText()).toEqual('Sauce Lab Back Packs');

        await driver.touchAction([
            { action:'press', x: 350, y: 1100 },
            { action: 'moveTo', x: 350, y: 300 },
            'release'
        ])

        const precoProduto = '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.LinearLayout/android.widget.TextView'
        expect(await $(precoProduto).get()).toEqual('$ 29.99');
        
    });
});