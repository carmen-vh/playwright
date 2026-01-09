import { test, expect } from '@playwright/test';
import { DynamicTablePage } from '../models/dynamic-table.model';
 
test('Compare CPU', async({page}) => {
    const dynamicTablePage = new DynamicTablePage(page);
    await dynamicTablePage.navigateDynamicTablePage();
    let allLinks = await dynamicTablePage.getAllLinkTags();

    // Find index of CPU 
    let indexCPU= allLinks.indexOf("CPU") ;

    // Store CPU values for each system
    let systems = Array(4);
    let valuesCPU = Array(4);
    
    for (let i = 1; i < 5; i++) {
        systems[i-1] = allLinks[(i * 5) + 1];
        valuesCPU[i-1] = allLinks[(i * 5) + indexCPU]; 
    }
    
    // Compare Yellow Label value with Chrome CPU Value
    let chromeIndex = systems.indexOf("Chrome");
    let status = `${systems[chromeIndex]} CPU: ${valuesCPU[chromeIndex]}`;
    
    expect(status).toMatch(await dynamicTablePage.getYellowLabelValue());
})